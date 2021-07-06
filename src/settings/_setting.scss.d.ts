declare namespace SettingScssNamespace {
  export interface ISettingScss {
    iconContainer: string;
    iconDisabled: string;
    itemContainer: string;
    settingItem: string;
    settings: string;
  }
}

declare const SettingScssModule: SettingScssNamespace.ISettingScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SettingScssNamespace.ISettingScss;
};

export = SettingScssModule;
