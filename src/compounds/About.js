import React from 'react'

const About = (props) => {
  return (
    <div className='my-9' style={{ marginTop: "98px", marginLeft: "103px" }}>
      <div className="d-flex my-30">
        <img style={{ width: "465px",height:"465px",borderRadius:"0px 0px 5% 0px" }} src='https://www.thestylesalad.in/cdn/shop/products/him1_1024x1024_2x_77d00e04-776a-4c99-83e2-0070925df8f4.jpg?v=1542106281'></img>
        <div>
          <h1 style={{ fontSize: "85px", position: "relative", right: "383px", bottom: "47px" }}>{props.lan ? "ನಮ್ಮ ಬಗ್ಗೆ" : "ABOut US"}</h1>
          <p style={{ paddingRight: "100px", paddingLeft: "55px" }}>
            <div style={{ textAlign: "left" }}>
              <b>{props.lan ? "iNotebook ಲಭ್ಯವಿರುವ ಅತ್ಯಂತ ಜನಪ್ರಿಯ ಮತ್ತು ಬಹುಮುಖ ಟಿಪ್ಪಣಿ-ತೆಗೆದುಕೊಳ್ಳುವ ಸಾಧನಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ ಎಂದು ತನ್ನ ಖ್ಯಾತಿಯನ್ನು ಗಳಿಸಿದೆ." :
                `iNotebook has earned its reputation as one of the most popular and versatile note-taking tools available.
      With the iNotebook, users can seamlessly create, organize, and access their notes across multiple devices,
               making it a go-to choice for individuals seeking a comprehensive note-taking solution.`}<br /></b>
            </div>


            <div />
            <div className="my-3" style={{ textAlign: "left" }}>{props.lan ? "ಪ್ರಮುಖ ಲಕ್ಷಣಗಳು " : "Key Features "}:</div>


            <div style={{ textAlign: "left" }}>{props.lan ? "೧" : "1"}. <b>{props.lan ? "ಕ್ರಾಸ್-ಡಿವೈಸ್ ಸಿಂಕ್ ಮಾಡುವಿಕೆ " : "Cross-Device Syncing "}</b>:
              {props.lan ? " ಸ್ಮಾರ್ಟ್‌ಫೋನ್‌ಗಳು, ಟ್ಯಾಬ್ಲೆಟ್‌ಗಳು ಮತ್ತು ಕಂಪ್ಯೂಟರ್‌ಗಳು ಸೇರಿದಂತೆ ವಿವಿಧ ಸಾಧನಗಳಲ್ಲಿ ತಡೆರಹಿತ ಸಿಂಕ್ ಮಾಡುವಿಕೆಗೆ ಧನ್ಯವಾದಗಳು, ನೀವು ಎಲ್ಲಿಗೆ ಹೋದರೂ ನಿಮ್ಮ ಟಿಪ್ಪಣಿಗಳನ್ನು ಪ್ರವೇಶಿಸಬಹುದು ಎಂದು iNotebook ಖಚಿತಪಡಿಸುತ್ತದೆ." : "iNotebook ensures that your notes are accessible wherever you go, thanks to seamless syncing across various devices, including smartphones, tablets, and computers."}
              <br />
              {props.lan ? "೨" : "2"}. <b>{props.lan ? "ವೆಬ್ ಕ್ಲಿಪ್ಪಿಂಗ್ " : "Web Clipping "}</b>:{props.lan ? ` iNotebook ನ ವೆಬ್ ಕ್ಲಿಪ್ಪಿಂಗ್ ವೈಶಿಷ್ಟ್ಯವನ್ನು ಬಳಸಿಕೊಂಡು ವೆಬ್ ಲೇಖನಗಳು, ಚಿತ್ರಗಳು ಮತ್ತು ವಿಷಯವನ್ನು ಸುಲಭವಾಗಿ ಸೆರೆಹಿಡಿಯಿರಿ, ನಂತರದ ಉಲ್ಲೇಖಕ್ಕಾಗಿ ಅಮೂಲ್ಯವಾದ ಆನ್‌ಲೈನ್ ಸಂಪನ್ಮೂಲಗಳನ್ನು ಉಳಿಸಲು ನಿಮಗೆ ಅನುಮತಿಸುತ್ತದೆ.` : `Capture web articles, images, and content with ease using iNotebook’s web clipping feature, allowing you to save valuable online resources for later reference.`}<br />
              {props.lan ? "೩" : "3"}. <b>{props.lan ? "ಗಮನಿಸಿ ಸಂಸ್ಥೆ " : "Note Organization"}</b>: {props.lan ? " ನೋಟ್‌ಬುಕ್‌ಗಳು, ಟ್ಯಾಗ್‌ಗಳು ಮತ್ತು ನೋಟ್‌ಬುಕ್‌ಗಳ ಸ್ಟ್ಯಾಕ್‌ಗಳನ್ನು ರಚಿಸುವ ಮೂಲಕ ನಿಮ್ಮ ಟಿಪ್ಪಣಿಗಳನ್ನು ಆಯೋಜಿಸಿ. ಈ ಕ್ರಮಾನುಗತ ರಚನೆಯು ನಿಮ್ಮ ಟಿಪ್ಪಣಿಗಳನ್ನು ತ್ವರಿತವಾಗಿ ಪತ್ತೆಹಚ್ಚಲು ಮತ್ತು ನಿರ್ವಹಿಸಲು ನಿಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ" : `Keep your notes organized by creating notebooks, tags, and notebooks stacks. This hierarchical structure helps you quickly locate and manage your notes.`}<br />
              {props.lan ? "೪" : "4"}. <b>{props.lan ? "ಶ್ರೀಮಂತ ಫಾರ್ಮ್ಯಾಟಿಂಗ್ " : "Rich Formatting"}</b>:{props.lan ? " iNotebook ಶ್ರೀಮಂತ ಪಠ್ಯ ಫಾರ್ಮ್ಯಾಟಿಂಗ್ ಆಯ್ಕೆಗಳನ್ನು ನೀಡುತ್ತದೆ, ದೃಷ್ಟಿಗೆ ಇಷ್ಟವಾಗುವ ಮತ್ತು ರಚನಾತ್ಮಕ ಟಿಪ್ಪಣಿಗಳನ್ನು ಸುಲಭವಾಗಿ ರಚಿಸಲು ನಿಮಗೆ ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ." : `iNotebook offers rich text formatting options, enabling you to create visually appealing and structured notes with ease.`}<br />
              {props.lan ? "೫" : "5"}. <b>{props.lan ? "ಸಹಯೋಗ " : "Collaboration"}</b>:{props.lan ? ` ನೋಟ್‌ಬುಕ್‌ಗಳು ಮತ್ತು ಟಿಪ್ಪಣಿಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳುವ ಮೂಲಕ ಸಹೋದ್ಯೋಗಿಗಳು ಅಥವಾ ಸ್ನೇಹಿತರೊಂದಿಗೆ ಸಹಕರಿಸಿ. ಹಂಚಿದ ಟಿಪ್ಪಣಿಗಳಿಗೆ ಬಹು ಬಳಕೆದಾರರು ಸಂಪಾದಿಸಬಹುದು ಮತ್ತು ಕೊಡುಗೆ ನೀಡಬಹುದು.` : `Collaborate with colleagues or friends by sharing notebooks and notes. Multiple users can edit and contribute to shared notes.}`}</div>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
