import React from "react";

const CallBackBlock = () => {
  return (
    <div className={"wrapper callBackBlock"}>
      <div className="container">
        <section className="block">
          <a name={"callback__block"}></a>
          <div className="content">
            <form className={"callBackForm"}>
              <input name="email" type="email" placeholder="Email" />
              <input name="name" type="text" placeholder="Full name" />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CallBackBlock;
