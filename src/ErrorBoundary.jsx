import { Component } from "react";
import { Link } from "@tanstack/react-router";
import { usePizzaOfTheDay } from "./usePizzaOfTheDay";

class ErrorBoundary extends Component {
  state = { hasError: false };
  constructor(props) {
    super(props);
    this.celebrateError = this.celebrateError.bind(this);
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // send to TrackJS or Sentry
    console.error("ErrorBoundary caught some stupid error", error, info);
  }
  componentDidMount() {}
  componentWillUnmount() {}
  componentDidUpdate() {}
  celebrateError = () => {
    this.setState({ celebration: "lol" });
  };

  render() {
    console.log(this.props.lol);
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Uh oh!</h2>
          <p>
            There was an error with this page. <Link to="/">click here</Link> to
            go back to home page.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}
function EBWithHooks() {
  const potd = usePizzaOfTheDay();
  return <ErrorBoundary lol={potd} />;
}
export default ErrorBoundary;
