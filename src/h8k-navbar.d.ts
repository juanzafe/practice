import "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "h8k-navbar": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { header?: string };
    }
  }
}
