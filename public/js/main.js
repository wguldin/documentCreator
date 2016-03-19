// ---------------------------------------------------------
// Elements
// ---------------------------------------------------------
var TextBlock = React.createClass({
    render: function() {
        return (
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        );
    }
});

var ImageBlock = React.createClass({
    render: function() {
        return (
            <img src="placehold.it/360x240" alt="Image Me!" />
        );
    }
});

var HeadingBlock = React.createClass({
    render: function() {
        return (
            <div>
                <h3>Heading Here</h3>
                <hr />
            </div>
        );
    }
});

var TableBlock = React.createClass({
    render: function() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Header 1</th>
                        <th>Header 2</th>
                        <th>Header 3</th>
                        <th>Header 4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Row 1 - Cell 1</td>
                        <td>Row 1 - Cell 2</td>
                        <td>Row 1 - Cell 3</td>
                        <td>Row 1 - Cell 4</td>
                    </tr>
                    <tr>
                        <td>Row 1 - Cell 1</td>
                        <td>Row 2 - Cell 2</td>
                        <td>Row 3 - Cell 3</td>
                        <td>Row 4 - Cell 4</td>
                    </tr>
                </tbody>
            </table>
        );
    }
});

var ColumnsBlock = React.createClass({
    render: function() {
        return (
            <div class="row">
                <div class="col-xs-4">Col 1</div>
                <div class="col-xs-4">Col 2</div>
                <div class="col-xs-4">Col 3</div>
            </div>
        );
    }
});

var Divider = React.createClass({
    render: function() {
        return (
            <hr />
        );
    }
});

var elementList = [
    {
        'name': 'Text',
        'icon': 'align-left',
        'html': <TextBlock />
    },
    {
        'name': 'Image',
        'icon': 'picture-o',
        'html': <ImageBlock />
    },
    {
        'name': 'Heading',
        'icon': 'header',
        'html': <HeadingBlock />
    },
    {
        'name': 'Table',
        'icon': 'table',
        'html': <TableBlock />
    },
    {
        'name': 'Column',
        'icon': 'columns',
        'html': <ColumnsBlock />
    },
    {
        'name': 'Divider',
        'icon': 'times',
        'html': <Divider />
    },
];

var Element = React.createClass({
    handleClick: function(e){
        e.preventDefault();
        this.props.handleClick();
    },

    render: function() {
        return (
            <li className="element" onClick={this.handleClick}>
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

    handleClick: function(index, element) {
        console.log(element.html);
    },

    render: function() {
        return (
            <ul className="list-unstyled">
                {this.state.elementList.map(function(element, index) {
                    return (
                        <Element
                            key={index}
                            handleClick={this.handleClick.bind(this, index, element)}
                            name={element.name}
                            icon={element.icon}
                        />
                    );
                }.bind(this))}
            </ul>
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

var Document = React.createClass({
    render: function() {
        return (
            <article className="document__frame">
                <div className="document">test</div>
            </article>
        );
    }
});

var Tab = ReactTabs.Tab;
var Tabs = ReactTabs.Tabs;
var TabList = ReactTabs.TabList;
var TabPanel = ReactTabs.TabPanel;

var App = React.createClass({
    getInitialState: function () {
        return {
            documentElements: []
        };
    },

    handleSelect: function (index, last) {
       console.log('Selected tab: ' + index + ', Last tab: ' + last);
    },

    render: function() {
        return (
            <div>
                <Document />
                <div className="control">
                    <Tabs
                        onSelect={this.handleSelect}
                        selectedIndex={0}
                    >
                        <TabList>
                            <Tab>Cotent</Tab>
                            <Tab>Settings</Tab>
                        </TabList>
                        <TabPanel>
                            <Elements />
                        </TabPanel>
                        <TabPanel>
                            <Settings />
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('content')
);
