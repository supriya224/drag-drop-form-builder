import React from "react";
import { ReactFormGenerator, ElementStore } from "react-form-builder2";
import { Button } from "../ui/button";

export default class Demobar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      previewVisible: false,
      shortPreviewVisible: false,
      roPreviewVisible: false,
    };

    this._onUpdate = this._onChange.bind(this);
  }

  componentDidMount() {
    ElementStore.subscribe((state) => this._onUpdate(state.data));
  }

  showPreview() {
    this.setState({
      previewVisible: true,
    });
  }

  showShortPreview() {
    this.setState({
      shortPreviewVisible: true,
    });
  }

  showRoPreview() {
    this.setState({
      roPreviewVisible: true,
    });
  }

  closePreview() {
    this.setState({
      previewVisible: false,
      shortPreviewVisible: false,
      roPreviewVisible: false,
    });
  }

  _onChange(data) {
    this.setState({
      data,
    });
  }

  _onSubmit(data) {
    console.log("onSubmit", data);
    // Place code to post json data to server here
  }

  render() {
    let modalClass = "modal";
    if (this.state.previewVisible) {
      modalClass += " show d-block";
    }

    let shortModalClass = "modal short-modal";
    if (this.state.shortPreviewVisible) {
      shortModalClass += " show d-block";
    }

    let roModalClass = "modal ro-modal";
    if (this.state.roPreviewVisible) {
      roModalClass += " show d-block";
    }

    return (
      <div className="clearfix ">
        <Button
          variant="default"
          className="mt-9 ml-24"
          type="submit"
          onClick={this.showPreview.bind(this)}
        >
          Preview Form
        </Button>
        {this.state.previewVisible && (
          <div className={modalClass} role="dialog">
            <div className="modal-dialog modal-lg" role="document">
              <div className=" flex justify-center">
                <ReactFormGenerator
                  download_path=""
                  back_action="/"
                  back_name="Back"
                  answer_data={{}}
                  action_name="Save"
                  form_action="/"
                  form_method="POST"
                  onSubmit={this._onSubmit}
                  variables={this.props.variables}
                  data={this.state.data}
                  submitButton={
                    <Button
                      variant="outline"
                      size="default"
                      type="submit"
                      onSubmit={this._onSubmit}
                    >
                      Submit
                    </Button>
                  }
                  backButton={
                    <Button
                      variant="outline"
                      type="submit"
                      onSubmit={this._onChange}
                    >
                      Back
                    </Button>
                  }
                />

                <div className="mt-3">
                  <Button
                    variant="outline"
                    size="gap"
                    onClick={this.closePreview}
                  >
                    x
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
