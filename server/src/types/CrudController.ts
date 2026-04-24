export type CrudControllerConfig = {
  paths: {
    getAll: string;
    getById: string;
    create: string;
    edit: string;
    delete: string;
    like?: string;
    unlike?: string;
  };
  paramName: 'artworkId' | 'styleId' | 'mediumId';
  service: {
    getAll: (query: Record<string, any>) => Promise<any>;
    getById: (id: string) => Promise<any>;
    create: (input: unknown) => Promise<any>;
    edit: (input: unknown, id: string) => Promise<any>;
    delete: (id: string) => Promise<any>;
    addLike?: (id: string, userId: string) => Promise<any>;
    removeLike?: (id: string, userId: string) => Promise<any>;
  };
};