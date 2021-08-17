



export default class ActionIcon extends React.Component {
    render() {

        return (
            <Link href={withPrefix(url)} {...attrs} className={classes}>
                <Icon icon={icon} />
                <span className="sr-only">{label}</span>
            </Link>
        );
    }
}


