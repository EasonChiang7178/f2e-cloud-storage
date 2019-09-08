import React from "react";

const defaultContextValue = {
  folders: {
    index: []
  },
  items: {}
};

const Context = React.createContext(defaultContextValue);


class StorageProvider extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      items: props.items,
      folders: this.prepareFoldersFromItems(props.items),
    };
  }

  prepareFoldersFromItems = (items) => items.reduce((folders, item) => ({
    ...folders,
    [item.parent_folder_id]: (folders[item.parent_folder_id] || []).concat(item.id)
  }), defaultContextValue.folders)

  render = () => {
    const { children } = this.props;

    return <Context.Provider value={this.state}>{children}</Context.Provider>;
  };
}

const StorageConsumer = Context.Consumer;


export { Context as default, StorageProvider, StorageConsumer };
