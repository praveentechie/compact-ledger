declare namespace MultipleInputScssNamespace {
  export interface IMultipleInputScss {
    addItem: string;
  }
}

declare const MultipleInputScssModule: MultipleInputScssNamespace.IMultipleInputScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: MultipleInputScssNamespace.IMultipleInputScss;
};

export = MultipleInputScssModule;
