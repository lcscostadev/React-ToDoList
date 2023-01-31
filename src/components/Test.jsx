
var todoItems = [];

class TodoList extends React.Component {
    render() {
        var items = this.props.items.map((item, index) => {
            return (
                <TodoListItem key={index} item={item} index={index} markTodoDone={this.props.markTodoDone} />
            );
        });
        return (
            <ul> {items} </ul>
        );
    }
}

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.onClickDone = this.onClickDone.bind(this);
    }
    onClickDone() {
        var index = parseInt(this.props.index);
        this.props.markTodoDone(index);
    }
    render() {
        var todoClass = this.props.item.done ?
            "done" : "undone";
        return (
            <li>
                <div className={todoClass}>
                    <span onClick={this.onClickDone}>
                        {this.props.item.value}</span>

                </div>
            </li>
        );
    }
}

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
        this.refs.itemName.focus();
    }
    onSubmit(event) {
        event.preventDefault();
        var newItemValue = this.refs.itemName.value;

        if (newItemValue) {
            this.props.addItem({ newItemValue });
            this.refs.form.reset();
        }
    }
    render() {
        return (
            <form ref="form" onSubmit={this.onSubmit} className="form-inline">
                <input type="text" ref="itemName" />
                <input type="submit" value="Add" />
            </form>
        );
    }
}


class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);

        this.markTodoDone = this.markTodoDone.bind(this);
        this.state = {
            todoItems: todoItems,
            markDoneItemLength: todoItems.length
        };
    }
    addItem(todoItem) {
        todoItems.unshift({
            index: todoItems.length + 1,
            value: todoItem.newItemValue,
            done: false
        });
        this.setState({ todoItems: todoItems });
        this.setState({ markDoneItemLength: todoItems.length });
    }
    removeItem(itemIndex) {
        todoItems.splice(itemIndex, 1);
        this.setState({ todoItems: todoItems });
    }
    markTodoDone(itemIndex) {
        var todo = todoItems[itemIndex];
        todo.done = !todo.done;
        todo.done ? this.setState({ markDoneItemLength: this.state.markDoneItemLength - 1 }) : this.setState({ markDoneItemLength: this.state.markDoneItemLength + 1 });
        this.setState({ todoItems: todoItems });
    }
    render() {
        return (
            <div id="main">
                <TodoForm addItem={this.addItem} />
                <div>{this.state.markDoneItemLength} remaining out of {this.state.todoItems.length} tasks</div>
                <TodoList items={this.props.initItems} markTodoDone={this.markTodoDone} />
            </div>
        );
    }
}

ReactDOM.render(<TodoApp initItems={todoItems} />, document.getElementById('app'));