



export default class ActionIcon extends React.Component {
    render() {
        const action = _.get(this.props, 'action');
        const hasIcon = _.get(action, 'has_icon');
        const icon = _.get(action, 'icon');
        if (!hasIcon || !icon) {
            return null;
        }
        const url = _.get(action, 'url');
        const label = _.get(action, 'label');
        const style = _.get(action, 'style', 'link');
        const classes = classNames('btn', 'btn--icon', {
            'btn--primary': style === 'primary',
            'btn--secondary': style === 'secondary',
            'btn--clear': style === 'link'
        });
        const newWindow = _.get(action, 'new_window');
        const noFollow = _.get(action, 'no_follow');
        const attrs = {};
        if (newWindow) {
            attrs.target = '_blank';
        }
        if (newWindow || noFollow) {
            attrs.rel = [(newWindow ? 'noopener' : ''), (noFollow ? 'nofollow' : '')].filter(Boolean).join(' ');
        }

        return (
            <Link href={withPrefix(url)} {...attrs} className={classes}>
                <Icon icon={icon} />
                <span className="sr-only">{label}</span>
            </Link>
        );
    }
}


<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>