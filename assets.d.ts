declare module '*.png' {
    const value: string;
    export default value;
}

declare module '*.jpg' {
    const value: string;
    export default value;
}

declare module '*.svg' {
    import * as React from 'react';
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

declare module 'vite-plugin-eslint' {
    import { Plugin } from 'vite';

    const eslintPlugin: () => Plugin;
    export default eslintPlugin;
}
