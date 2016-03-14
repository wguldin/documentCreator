// ---------------------------------------------------------
// Elements
// ---------------------------------------------------------
var elementList = [
    {
        'name': 'Text',
        'icon': 'align-left'
    },
    {
        'name': 'Image',
        'icon': 'picture-o'
    },
    {
        'name': 'Heading',
        'icon': 'header'
    },
    {
        'name': 'Table',
        'icon': 'table'
    },
    {
        'name': 'Column',
        'icon': 'columns'
    },
    {
        'name': 'Divider',
        'icon': 'times'
    },
];

var Element = React.createClass({
    render: function() {
        return (
            <li className="element">
                <i className={'fa fa-' + this.props.icon}></i>
                <span className="element__name">{this.props.name}</span>
            </li>
        );
    }
});

var Elements = React.createClass({
    getInitialState: function () {
        return {
            elementList: elementList,
        };
    },

    render: function() {
        return (
            <ul className="list-unstyled">
                {this.state.elementList.map(function(element, index) {
                    return (
                        <Element
                            key={index}
                            name={element.name}
                            icon={element.icon}
                         />
                    );
                }.bind(this))}
            </ul>
        );
    }
});

// ---------------------------------------------------------
// Tabs
// ---------------------------------------------------------

var Tab = React.createClass({
    handleClick: function(e){
        e.preventDefault();
        this.props.handleClick();
    },

    render: function() {
        return (
            <a className={this.props.isCurrent ? 'btn btn-primary' : 'btn btn-default'} onClick={this.handleClick}>
                {this.props.name}
            </a>
        );
    }
});

var Tabs = React.createClass({
    handleClick: function(tab){
        this.props.changeTab(tab);
    },

    render: function(){
        return (
            <div className="text-center">
                <nav className="btn-group">
                    {this.props.tabList.map(function(tab, index) {
                        return (
                            <Tab
                                key={index}
                                handleClick={this.handleClick.bind(this, index)}
                                name={tab.name}
                                isCurrent={(this.props.currentTab === index)}
                             />
                        );
                    }.bind(this))}
                </nav>
            </div>
        );
    }
});

var Settings = React.createClass({
    render: function() {
        return (
            <div>test settings</div>
        );
    }
});

var tabList = [
    {
        'name': 'Content',
        'content': <Elements />
    },
    {
        'name': 'Settings',
        'content': <Settings />
    }
];

var Document = React.createClass({
    render: function() {
        return (
            <article className="document__frame">
                <div className="document">test</div>
            </article>
        );
    }
});

var App = React.createClass({
    getInitialState: function () {
        return {
            tabList: tabList,
            currentTab: 0
        };
    },

    changeTab: function(index) {
        this.setState({ currentTab: index });
    },

    render: function() {
        return (
            <div>
                <Document />
                <div className="control">
                    <Tabs
                        currentTab={this.state.currentTab}
                        tabList={this.state.tabList}
                        changeTab={this.changeTab}
                    />
                    <div className="control__panel">
                        {this.state.tabList[this.state.currentTab].content}
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('content')
);