declare namespace HomeScssNamespace {
  export interface IHomeScss {
    formRow: string;
    homePage: string;
    homeWrapper: string;
    modalForm: string;
    transactionDetails: string;
    transactionList: string;
  }
}

declare const HomeScssModule: HomeScssNamespace.IHomeScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HomeScssNamespace.IHomeScss;
};

export = HomeScssModule;
