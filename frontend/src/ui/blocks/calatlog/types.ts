export type Tabs =
    | 'contacts'
    | 'info'
    | 'history'
    ;

export type TabData = {
    label:string;
    type:Tabs;
}