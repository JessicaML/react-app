export default class ContainerComponent extends React.Component {
    constructor(props) {
        super(props);

        this.modifyChildren = this.modifyChildren.bind(this);
    }

    modifyChildren(child) {
        const className = classNames(
            child.props.className,
            {...otherClassses}
        );

        const props = {
            className
        };

        return React.cloneElement(child, props);
    }
    render() {
        return (<div>
            {React.Children.map(this.props.children, this.modifyChildren(child))}
        </div>);
    }
}