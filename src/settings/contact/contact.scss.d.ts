declare namespace ContactScssNamespace {
  export interface IContactScss {
    contact: string;
    contactContainer: string;
    contactForm: string;
    contactItem: string;
    contactList: string;
  }
}

declare const ContactScssModule: ContactScssNamespace.IContactScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ContactScssNamespace.IContactScss;
};

export = ContactScssModule;
