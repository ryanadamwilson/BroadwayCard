import React from "react";
import moment from "moment";

import getRemainingPerformances from "../util/getRemainingPerformances";

const DAYS_TO_SHOW_ON_LOAD = 3;

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAll: false,
      height: null
    };
    this.handleDisplayAll = this.handleDisplayAll.bind(this);
  }

  componentDidMount() {
    this.updateHeight();
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.displayAll && this.state.displayAll) this.updateHeight();
  }

  handleDisplayAll() {
    this.setState({ displayAll: true });
  }

  getHeight() {
    this.setState({ height: this.datesElement.scrollHeight });
  }

  renderMainDetails() {
    const { name, image, price_max, price_min } = this.props;
    return (
      <div className="Card__main-details Card__cell">
        <img src={image.src} alt={image.alt} className="Card__poster" />
        <div className="Card__title-container">
          <h1 className="Card__title">
            {name} <span>Tickets</span>
          </h1>
          <div className="Card__price-range">
            {price_min} - {price_max}
          </div>
          <a href="#" className="Card__learn">
            <img
              src="https://cdn.glitch.com/bf244f65-c514-428a-b4b2-ac2746281e91%2Finfo.svg?1555596324183"
              alt="Learn More"
              className="icon"
            />
            <span>Learn More</span>
          </a>
        </div>
      </div>
    );
  }

  renderDatesAndPerformances() {
    const { dates } = this.props;
    let duplicateDates = dates.slice();
    const DATES_FILTER = this.state.displayAll
      ? dates.length
      : DAYS_TO_SHOW_ON_LOAD;
    return (
      <div
        className="Card__dates"
        ref={datesElement => (this.datesElement = datesElement)}
        style={{ height: this.state.height }}
      >
        {dates
          .filter((date, i) => i < DATES_FILTER)
          .map(date => (
            <div className="Card__date date" key={date.id}>
              <div className="date__info Card__cell">
                <div className="date__day">
                  {moment(date.date)
                    .format("dddd")
                    .substring(0, 3)}
                </div>
                <div className="date__mon-date">
                  {moment(date.date).format("MMM DD")}
                </div>
              </div>
              <div className="date__times Card__cell">
                {date.times.map(({ time, tickets_available }, i) => {
                  return tickets_available ? (
                    <button className="time time--is_available" key={i}>
                      {moment(time, "HH:mm:ss").format("h:mma")}
                    </button>
                  ) : (
                    <div className="time time--not_available" key={i}>
                      <div className="time__sold-out">Sold Out</div>
                      <div className="time__line-through">
                        {moment(time, "HH:mm:ss").format("h:mma")}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
      </div>
    );
  }

  renderDisplayMore() {
    const { dates } = this.props;
    if (!this.state.displayAll) {
      return (
        <div className="Card__more Card__cell">
          <button onClick={this.handleDisplayAll}>
            <span>
              More Performances (
              {getRemainingPerformances(dates, DAYS_TO_SHOW_ON_LOAD)})
            </span>
          </button>
          <img
            src="https://cdn.glitch.com/bf244f65-c514-428a-b4b2-ac2746281e91%2Fchevron.svg?1555596324053"
            alt="chevron"
            className="chevron"
          />
        </div>
      );
    }
    return (
      <div className="Card__view-calendar Card__cell">
        View Calendar
        <img
          src="https://cdn.glitch.com/bf244f65-c514-428a-b4b2-ac2746281e91%2Fchevron.svg?1555596324053"
          alt="chevron"
        />
      </div>
    );
  }

  render() {
    return (
      <div className="Card">
        {this.renderMainDetails()}
        {this.renderDatesAndPerformances()}
        {this.renderDisplayMore()}
      </div>
    );
  }
}
