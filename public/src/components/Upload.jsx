import React from 'react';
import ReactDOM from 'react-dom';

class UploadReceipt extends React.Component {

  constructor(props) {
    super(props);
  }
//this.props.callGVision

  render() {

    return (
      <div>
        <h2>{this.props.tripName}</h2>
        <h3>Upload Your Receipt for </h3>
        <form ref='uploadForm'
          id='uploadForm'
          action='http://localhost:3000/upload'
          method='post'
          encType="multipart/form-data"
          onSubmit={this.props.callGVision}>
            <input type="file" name="sampleFile" />
            <input type='submit' value='Upload!' />
        </form>
      </div>
    )
  }
}

export default UploadReceipt;
