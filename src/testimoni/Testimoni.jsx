import Gue from "../assets/gue.png";

const Testimoni = () => {
  return (
    <div className="mt-8">
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={Gue} />
          </div>
        </div>
        <div className="chat-header">
          Agus Alfandi
          <time className="text-xs">12:45</time>
        </div>
        <div className="chat-bubble">
          Gimana Leptopnya kemaren yang dibeli di toko TECH. ?
        </div>
        <div className="chat-footer">Delivered</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div className="chat-header">
          Linda
          <time className="text-xs">12:46</time>
        </div>
        <div className="chat-bubble">
          Mantab mas buat render sat set sat set 👍 💯
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={Gue} />
          </div>
        </div>
        <div className="chat-header">
          Agus Alfandi
          <time className="text-xs">12:47</time>
        </div>
        <div className="chat-bubble">Mantab... 👍</div>
        <div className="chat-footer">Delivered</div>
      </div>

      <div className="overflow-hidden">
        <p className=" text-2xl text-green-500 whitespace-nowrap overflow-hidden animate-[marquee_30s_linear_infinite]">
          Anda puas kami senang
        </p>
      </div>
    </div>
  );
};

export default Testimoni;
