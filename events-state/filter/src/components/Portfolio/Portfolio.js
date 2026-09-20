import { Component } from 'react';
import Toolbar from '../Toolbar/Toolbar';
import ProjectList from '../ProjectList/ProjectList';

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 'All',
      filters: ['All', 'Websites', 'Flayers', 'Business Cards']
    };
  }

  handleSelectFilter = (filter) => {
    this.setState({ selected: filter });
  };

  getFilteredProjects = () => {
    const { projects } = this.props;
    const { selected } = this.state;

    if (selected === 'All') {
      return projects;
    }
    return projects.filter((p) => p.category === selected);
  };

  render() {
    const { selected, filters } = this.state;
    const filteredProjects = this.getFilteredProjects();

    return (
      <div className="portfolio">
        <Toolbar
          filters={filters}
          selected={selected}
          onSelectFilter={this.handleSelectFilter}
        />
        <ProjectList projects={filteredProjects} />
      </div>
    );
  }
}

export default Portfolio;