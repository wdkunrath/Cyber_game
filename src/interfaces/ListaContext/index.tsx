export type Ilista = {
    lista: {
      id:number;
      img: string | undefined;
      title:string | undefined;
      description:string | undefined;
    }[]
};

export type IlistaDrib = {
    lista: {
      id:number;
      html_url: string | undefined;
      title:string | undefined;
      description: string | null;
    }[]
};