import { useState } from "react";
import { Button, } from "react-bootstrap";
import { FaLongArrowAltLeft } from "react-icons/fa";
import ImageUploading from "react-images-uploading";
import styled from "styled-components";
import axios from "../../Hooks/axios";

const Avatar = ({ setEditAvatar, id, token }) => {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState([]);
  const [error, setError] = useState("");

  const onImgChange = (image, addUpdateIndex) => {
    // data for submit
    setImage(image);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if(image[0]){
   
    let newformData = new FormData();
    newformData.append("productImg", image[0]?.file);

   
    try {
      const res = await axios.put(
        `/api/users/${id}`,
        newformData,
        {
          headers: {
            token: "Bearer " + token,
          },
          withCredentials: true,
        }
      );
      if (res?.data?.avatar) {
        setEditAvatar(false);
      }
    } catch (err) {
      setError(err?.response?.data);
    }
  }
  };
  return (
    <AvatarUploadWrapper>
      <h4 style={{ cursor: "pointer" }} onClick={() => setEditAvatar(false)}>
        {" "}
        <FaLongArrowAltLeft /> get back
      </h4>
      <h3> Edit Profile Pic </h3>
      <form onSubmit={submitHandler}>
        <ImageUploading
          multiple
          name="productImg"
          value={image}
          onChange={onImgChange}
          maxNumber={1}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            errors,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className="upload__image-wrapper">
              <div className="uploadBtns">
                <Button
                  style={isDragging ? { color: "red" } : null}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  Click or Drop here
                </Button>
                &nbsp;
                <Button onClick={onImageRemoveAll}>Remove image</Button>
              </div>
              <div className="imgsView">
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <img src={image.data_url} alt="" />
                    <div className="image-item__btn-wrapper">
                      <div className="imgUpdatesBtns">
                        <Button
                          variant="success"
                          onClick={() => onImageUpdate(index)}
                        >
                          Update
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => onImageRemove(index)}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {errors && (
                <div>
                  {errors.maxNumber && (
                    <span>Number of selected images should be one</span>
                  )}
                  {errors.acceptType && (
                    <span>Your selected file type is not allow</span>
                  )}
                  {errors.maxFileSize && (
                    <span>Selected file size exceed maxFileSize</span>
                  )}
                  {errors.resolution && (
                    <span>
                      Selected file is not match your desired resolution
                    </span>
                  )}
                </div>
              )}
            </div>
          )}
        </ImageUploading>
        <Button type="submit">submit</Button>
        <p style={{padding: '15px 0'}}>{error && error}</p>
      </form>
    </AvatarUploadWrapper>
  );
};

const AvatarUploadWrapper = styled.div`
  .uploadBtns {
    display: flex;
    justify-content: center;
  }
  .imgsView {
    display: flex;
    justify-content: center;
    margin: 25px auto;

    .image-item {
      img {
        width: 150px;
        height: 120px;
      }
    }
  }
`;

export default Avatar;
