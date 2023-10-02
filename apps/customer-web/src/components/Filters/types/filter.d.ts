declare namespace Components {
  declare namespace SearchFilter {
    interface Filter {
      types: Type[];
    }

    interface Type {
      title: string;
      code: string;
      values: string[];
    }
  }
}
