---
slug: /current/extending-the-sdk
sidebar_position: 19
sidebar_label: Extending The SDK
---


# Extending the SDK

:::info

This area will explain how we've made use of Dependency Injections as well as how the SDK may be extended.

:::

This SDK was designed to be extendable. This was achieved by utilizing the Dependency Injection framework.
There are different implementations of DI frameworks that you can use in Unity, Zenject being 
the most popular one. However as this SDK aims to be cross-engine Microsoft's DI framework was chosen
as the one that can run in any CLR environment. You can read more about Microsoft's DI framework [using this link](https://learn.microsoft.com/en-us/dotnet/core/extensions/dependency-injection#multiple-constructor-discovery-rules).

As any DI framework it works with contract-implementation pairs. So, when you request the RpcProvider
with `web3.RpcProvider`, the SDK looks for the implementation of `IRpcProvider` 
(`JsonRpcProvider` being one of them) that's been registered with the `IRpcProvider` contract type.
If it indeed was registered, then an instance of implementation type is returned.

### Adding a New Implementation for the Existing Slot

There are a number of default slots like: IRpcProvider, ISigner, ITransactionExecutor, etc.
And you can bind your custom implementation to any of those. Let's add a fake XML implementation
for the IRpcProvider:

```csharp
public class MyXmlRpcProvider : IRpcProvider
{
    // ...
}
```

To actually bind our implementation to a Web3 instance we should also add an extension method
for `IWeb3ServiceCollection`:

```csharp
using Microsoft.Extensions.DependencyInjection

public static class MyXMLRpcProviderExtensions
{
    public static IWeb3ServiceCollection UseMyXmlProvider(this IWeb3ServiceCollection services)
    {
        services.AddSingleton<IRpcProvider, MyXmlRpcProvider>();
        return services;
    }
}
```

It is also a good idea to check whether the slot that you're binding to was not yet occupied.
If it's already occupied, your new contract-implementation will be ignored when resolving the component. 
You can check if the slot is not bound using `AssertServiceNotBound()` extension method like so:

```csharp
public static void UseMyXmlProvider(this IWeb3ServiceCollection services)
{
    services.AssertServiceNotBound<IRpcProvider>();
    services.AddSingleton<IRpcProvider, MyXmlRpcProvider>();
}
```

As we've created a method that adds `<IRpcProvider, MyXmlRpcProvider>` contract-implementation pair
to the list of registered services, lets actually call this method from within `Web3Builder.Configure()`:

```csharp
var web3 = await new Web3Builder(ProjectConfigUtilities.Load())
    .Configure(services =>
    {
        services.UseMyXmlProvider();
    })
    .LaunchAsync();
```

Now when you request `Web3.RpcProvider` your new and shiny `IRpcProvider` implementation is returned.
More so, each component that depends on `IRpcProvider` will use an instance of your newly created implementation.

### Service Configuration

You might want to make your new service configurable during Web3 build time, like so:

```csharp
var web3 = await new Web3Builder(ProjectConfigUtilities.Load())
    .Configure(services =>
    {
        services.UseRpcProvider(new JsonRpcProviderConfig 
            { RpcNodeUrl = "letsplayvideogamesallday.org/json-rpc" }
        );
    })
    .LaunchAsync();
```

Basically, you just have to create a new class for the configuration data and add a dependency 
of our newly created type to your service:

```csharp
public class MyXmlRpcProviderConfig
{
    public string CustomRpcNodeUrl { get; set; }
}

public class MyXmlRpcProvider : IRpcProvider
{
    private MyXmlRpcProviderConfig config;

    public MyXmlRpcProvider(MyXmlRpcProviderConfig config)
    {
        this.config = config;
    }
    
    // ...
}
```

You'd also want to create two new extension methods to keep your Web3 build process 
clean and easy to use:

```csharp
public static class MyXMLRpcProviderExtensions
{
    public static readonly MyXmlRpcProviderConfig DefaultConfig = new();

    public static IWeb3ServiceCollection UseMyXmlProvider(this IWeb3ServiceCollection services, MyXmlRpcProviderConfig config)
    {
        ConfigureMyXmlProvider(services, config);
        UseMyXmlProvider(services);
        return services;
    }

    public static IWeb3ServiceCollection ConfigureMyXmlProvider(this IWeb3ServiceCollection services, MyXmlRpcProviderConfig config)
    {
        services.Replace(ServiceDescriptor.Singleton(config));
        return services;
    }
    
    public static IWeb3ServiceCollection UseMyXmlProvider(this IWeb3ServiceCollection services)
    {
        services.AssertServiceNotBound<IRpcProvider>();
        
        services.TryAddSingleton(DefaultConfig);
        services.AddSingleton<IRpcProvider, MyXmlRpcProvider>();
        return services;
    }
}
```

### Creating Brand New Service Slots

You can also add completely new contract types (slots) to your Web3 client.
The process is very similar to adding new implementation to the existing slot, but you also
have to create an interface for the new contract type and a getter extension method.

Let's create the interface and one implementation:

```csharp
public interface ITrueRandom
{
    int GetRandomValue();
}

public class NotReallyTrueRandom : ITrueRandom
{
    public int GetRandomValue() => new Random().Next();
}
```

Now let's create an extension method to bind `NotReallyTrueRandom` to `ITrueRandom` slot
in our Web3 instance:

```csharp
public static class TrueRandomExtensions
{
    public static IWeb3ServiceCollection UseNotReallyTrueRandom(this IWeb3ServiceCollection services)
    {
        services.AssertServiceNotBound<ITrueRandom>();
        services.AddSingleton<ITrueRandom, NotReallyTrueRandom>();
        return services;
    }
}
```

We'd also need a getter method for our new custom slot. It can be added to `TrueRandomExtensions`
as another extension method:

```csharp
public static class TrueRandomExtensions
{
    public static ITrueRandom TrueRandom(this Web3 web3) => web3.ServiceProvider.GetRequiredService<ITrueRandom>();
    
    // ...
}
```

To use your `TrueRandom` component, you'd first have to bind it using `UseNotReallyTrueRandom` and
then simply access it using the `TrueRandom` method like so:

```csharp
var web3 = await new Web3Builder(ProjectConfigUtilities.Load())
    .Configure(services =>
    {
        services.UseNotReallyTrueRandom();
    })
    .LaunchAsync();

var myRandomValue = web3.TrueRandom().GetRandomValue();
```

It is of course accessible by any component created using the DI system:

```csharp
public class RandomApplier
{
    private IRpcProvider rpcProvider;
    private ITrueRandom random;

    public RandomApplier(
        IRpcProvider rpcProvider,
        ITrueRandom random // instance of NotReallyTrueRandom
        )
    {
        this.random = random;
        this.rpcProvider = rpcProvider;
    }
    
    // ...
}
```

### Creating Your Own UPM Package

This modular approach allows you to create your own UPM (Unity Package Manager) packages that
extend ChainSafe Gaming SDK. Just put your new services in a separate package and add a 
reference to `io.chainsafe.web3-unity` in your manifest file.

To learn more on how to create a new UPM package [visit this page](https://docs.unity3d.com/Manual/CustomPackages.html).