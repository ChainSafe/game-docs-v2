---
slug: /current/extending-ui
sidebar_position: 23
sidebar_label: Extending UI
---

# Extending UI

:::info

This page shows you how to extend UI for the SDK.

:::

To Extend UI for the SDK, you can create your own UI scripts that inherit from `GuiScreen`

## Overlays

There are three overlay types `GuiOverlayManager.GuiOverlayType` available in the SDK:

1. **Error :** Displays an error message.
2. **Loading :** Displays a message with a loading spinner.
3. **Toast :** Displays a toast message with a timeout.

### Usage

To show an overlay, you can call the following method:

```csharp
int GuiManager.Instance.Overlays.Show(GuiOverlayType type, string message, bool deactivateOnClick, Action onClose = null, float timeOut = 0)
```

| **Name**            | **Type**         | **Description**                                                                                  |
|---------------------|------------------|--------------------------------------------------------------------------------------------------|
| `type`              | `GuiOverlayType` | Type of the overlay, it be `Error`, `Loading` or `Toast`                                         |
| `message`           | `string`         | Message to display in overlay                                                                    |
| `deactivateOnClick` | `bool`           | Can overlay be closed on click                                                                   |
| `onClose`           | `Action`         | Callback to be invoked when overlay is closed                                                    |
| `timeOut`           | `float`          | Time in seconds after which overlay should be closed, if it is equal to 0 then it has no timeout |

