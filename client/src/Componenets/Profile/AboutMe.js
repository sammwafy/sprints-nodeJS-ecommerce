import {  useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { FaLongArrowAltLeft } from "react-icons/fa";
import axios from "../../Hooks/axios";
const AboutMe = ({ setEditAboutMe, id, token }) => {
  const [AboutMe, setAboutMe] = useState("")
  const submitHandler = async (e) => {
    e.preventDefault();
   
   if(AboutMe?.length > 50){
    try {
      const res = await axios.put(`/api/users/${id}`, 
      {"aboutMe": AboutMe}, {
        headers: {
          token: "Bearer " + token,
        },
        withCredentials: true,
      });
      if(res?.data?.aboutMe){
        setEditAboutMe(false)
      }
    } catch (err) {
      console.log(err);
    }
  }else{
    alert('about me must be more than 50 char')
  }
  };

  return (
    <Form onSubmit={submitHandler}>
      <h4 style={{cursor: 'pointer'}} onClick={()=> setEditAboutMe(false)}> <FaLongArrowAltLeft/> get back</h4>
      <h3> Change About Me </h3>
      <InputGroup className="mb-3">

        <FormControl
          required
          as="textarea"
           rows="3"
          onChange={(e) => setAboutMe(e.target.value)}
          value={AboutMe}
          placeholder="About Me"
          aria-label="AboutMe"
          aria-describedby="AboutMe"
          autoComplete="off"
        />
      </InputGroup>
      <Button type="submit">submit</Button>
    </Form>
  );
};

export default AboutMe;
