import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { closeModalAddImage, uploadImage } from '../../redux/actions';
import GeneralModal from '../GeneralModal/GeneralModal';
// import ImageLoader from '../ImageLoader/ImageLoader';
// import { validateImageToUpload } from '../../util';

import s from './ModalAddImage.module.css';

export default function ModalAddImage({ handleImage }) {

  const dispatch = useDispatch();
  const { uploadedImage } = useSelector(state => state.general.modalAddImage);

  const [ uploading, setUploading ] = React.useState(false);
  const [ validation , setValidation ] = React.useState('');
  const [ preview, setPreview ] = React.useState(null);
  const [ file, setFile ] = React.useState({
    fileName: '',
    data: null,
  });

  React.useEffect(() => {

    if (!file.data) {
      setPreview(null);
      return;
    }

    const objUrl = URL.createObjectURL(file.data);
    setPreview(objUrl);

    return () => URL.revokeObjectURL(objUrl);
  }, [file]);

  React.useEffect(() => {
    if (uploading && uploadedImage !== '') {
      handleImage(uploadedImage);
      // dispatch(closeModalAddImage());
    }
  }, [uploading, uploadedImage])

  let handleOnChange = function(e) {
    let [ fileToUpload ] = e.target.files;
    // let resultValidation = validateImageToUpload(fileToUpload);
    // if (resultValidation.valid) setFile({ fileName: fileToUpload.name, data: fileToUpload });
    // else e.target.value = null;
    // setValidation(resultValidation.msg);
  }

  const handleClickInput = event => {
    const { target = {} } = event || {};
    target.value = "";
  };


  let handleConfirm = function() {
    setUploading(true);

    let formData = new FormData();
    formData.append('file', file.data);
    formData.append('upload_preset', 'tech_market_henry');

    // dispatch(uploadImage(formData));
  }

  let handleCancel = function() {
    // dispatch(closeModalAddImage());
  }

  let content = (
    <div className = {s.uploadZone}>
      <div className = {s.containerImage}>
      {/* {
        preview && 
        // <ImageLoader image = {preview} alt = {file.fileName} />
      } */}
      {
        !preview && <span className = {s.spanResultValidation} >-NO IMAGE-</span>
      }
      </div> 
      <input type = "file" name = 'file' className = {s.inputFile} onChange = {handleOnChange} onClick = {handleClickInput}/>
      <span className = {`${s.spanResultValidation} ${validation === '' ? s.valid : ''}`}>
        {validation !== '' ? validation : file.fileName}
      </span>
    </div>
  );

  return (
    <GeneralModal
      confirm = {true}
      handleConfirm = {handleConfirm}
      cancel = {true}
      handleCancel = {handleCancel}
      title = {'Import Image'}
      content = {content}
      disableAll = {uploading}
      disableConfirm = {!file || !file.data}
    />
  );
}