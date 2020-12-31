import React, { useRef, useState } from 'react';
import styles from './css/Form.css'
import Select from 'react-select';


const Form = (props) => {

  const [imageSource, setImageSource] = useState(null);

  return (
    <div className={styles["form-container"]}>
      <div className={styles["form-header"]}>
        <h1 >Add a New Plant</h1>
      </div>
      <form className={styles["add-plant-form"]} onSubmit={ (e)=>{ props.handleSubmitPlant(e); } }>

        <h4>Name:</h4>
        <input type="text" name="plant-name" placeholder="What kind of plant did you get?" />

        <h4>Nickname:</h4>
        <input type="text" name="nickname" placeholder="Make it personal."/>

        <h4>Watering Cycle:</h4>
        <input type="number" name="watering-cycle-amount" placeholder="How many times..." />
        <Select className={styles["select-input"]} name="watering-cycle-period" placeholder="per period?" options={[
          { value: 'daily', label: 'Daily' },
          { value: 'weekly', label: 'Weekly' },
          { value: 'bi-weekly', label: 'Bi-Weekly' },
          { value: 'monthly', label: 'Monthly' }
        ]} />

        <h4>Light:</h4>
        <Select className={styles["select-input"]} placeholder="What kind of light does your plant like?" name="light-level" options={[
          { value: 'low', label: 'Low' },
          { value: 'moderate', label: 'Moderate' },
          { value: 'bright', label: 'Bright' }
        ]} />
        <Select className={styles["select-input"]} placeholder="Direct or indirect?" name="light-source" options={[
          { value: 'direct', label: 'Direct' },
          { value: 'indirect', label: 'Inderect' }
        ]} />

        <h4>Humidity:</h4>
        <Select className={styles["select-input"]} name="humidity" placeholder={`Feelings about the word \"moist\"?`} options={[
          { value: 'low', label: 'Low' },
          { value: 'moderate', label: 'Moderate' },
          { value: 'high', label: 'High' }
        ]} />

        <h4>Add Categories:</h4>
        <Select className={styles["select-input"]} name="categories" placeholder={`Let\'s sort some things out.`} options={props.categories} isMulti />


        <h4>Add Photo</h4>
        <Select className={styles["select-input"]} placeholder="What's the source?" options={[
          { value: 'url', label: 'URL' },
          { value: 'upload', label: 'Upload' }
        ]} onChange={(e)=>{setImageSource(e.value); props.setImage('')}} />

        {
          (imageSource === 'url') ?
            <input type="text" name="photo-url" placeholder="Enter URL" onChange={(e)=>{props.setImage(e.target.value)}} />
            : null
        }
        { (imageSource === 'upload') ?
            <input type="file" name="photo-file" placeholder="Upload an Image" onChange={props.uploadImage}  />
            : null
        }


        <input className={styles["submit-plant-btn"]} type="submit" />
      </form>

      { (props.image.length > 0) ? (
          <div className={styles["image-viewer"]}>
            { props.image === 'Error' ? (
              <div className={styles["image-error"]}> Error Loading Image </div>
            ) : <img className={styles["image-viewer-img"]} src={ props.image }/> }
          </div> ) : null
      }

      {/* <div className={styles["close-form"]}>
        <button className={styles["close-form-btn"]} onClick={ ()=> (props.setContent('PlantList')) } >Return to Plants</button>
      </div> */}
    </div>
  );
}

export default Form;
