export interface Element {
  label: string;
  type: string;
  required: boolean;
  cid: string;
  id?: string;
  options: {
    fields: Array<Element>;
    description: string;
    size: number | undefined;
  };
}

export interface Option {
  label: string;
  checked: boolean;
}
