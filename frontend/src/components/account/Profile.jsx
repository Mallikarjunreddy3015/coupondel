
import {  IconButton} from "@mui/material";
import Box from "@mui/material/Box";
import EditIcon from '@mui/icons-material/Edit';


const Profile = () => {
  console.log("calling");
  return (
    <>
       <Box
          sx={{
            mt: 10,
            width: "80%",
          }}
        >
          <Box
            sx={{
              background:
                "url(https://d8it4huxumps7.cloudfront.net/uploads/images/62ee019aceede_user_cover_image.jpeg?d=1200x321)",
              minHeight: "20vh",
              display: "flex",
              m: "",
              backgroundRepeat:"no-repeat",
              overflow:"hidden",
              height:"200px",
              backgroundSize:"100% 100%",
            }}
          />
           <Box sx={{backgroundColor:"#ffff",width:{xs:"100%",md:"90%"},
           display:"block",margin:"auto",marginBottom:"14px",minHeight:"200px",position:"relative",top:"-100px",borderRadius:"4px",padding:"50px"}}>
            
            <Box sx={{display:"flex"}}>
              <Box
              component="img"
              sx={{
                borderRadius: "50%",
                display: "block",
                width:"100px",padding:"12px",
              }}
              src="https://picsum.photos/200"
            />
            <Box sx={{paddingLeft:"20px"}}>
             <p style={{fontSize:"24px"}}>Your Name</p> 
             
            </Box>
             <IconButton sx={{border:"1px solid gray",position:"absolute",right:"20px", zIndex:"2",top:"50%",transform:"translateY(-50%)"}}>{<EditIcon/>}</IconButton>
            </Box>
           </Box>
           <Box sx={{backgroundColor:"#ffff",width:{xs:"100%",md:"90%"},
           display:"block",margin:"auto",marginBottom:"8px",minHeight:"200px",position:"relative",top:"-100px",borderRadius:"4px",padding:"50px"}}></Box>
            
           
        </Box>
    </>
  );
};
export default Profile;
