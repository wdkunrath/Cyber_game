import 'styled-components';

declare module 'styled-components'{
    export interface DefaultTheme{
        title: string,

        colors: {
            primary:string,
            secundary:string,
            Tertiary:string,
            Shadow: string,

            gray: string,
            black: string,
            white: string,

            success: string,
            info:string,
            warning:string,
        }
    }
}