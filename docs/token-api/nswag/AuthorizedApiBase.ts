/**
 * Configuration class needed in base class.
 * The config is provided to the API client at initialization time.
 * API clients inherit from #AuthorizedApiBase and provide the config.
 */
export class IConfig {
  /**
   * Returns a valid value for the Authorization header.
   * Used to dynamically inject the current auth header.
   */
}

export class AuthorizedApiBase {
  protected accessToken: string;
  private readonly config: IConfig;

  protected constructor(config: IConfig, accessToken: string = "") {
    this.config = config;
    this.accessToken = accessToken;
  }

  protected transformOptions = (
    options: AxiosRequestConfig
  ): Promise<AxiosRequestConfig> => {
    options.headers = {
      ...options.headers,
      Authorization: this.accessToken ? `Bearer ${this.accessToken}` : "",
    };
    return Promise.resolve(options);
  };

  setToken(accessToken: string) {
    this.accessToken = accessToken;
  }
}
