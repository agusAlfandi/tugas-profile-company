import Gue from "../../assets/gue.svg";
import { CS } from "../../assets/page";

const Testimoni = () => {
  return (
    <div className="mt-8">
      <div className="chat chat-start">
        <div className="avatar chat-image">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={Gue} />
          </div>
        </div>
        <div className="chat-header flex items-center gap-4">
          <p>Agus Alfandi</p>
          <time className="text-xs">12:45</time>
        </div>
        <div className="chat-bubble">
          Gimana Leptopnya kemaren yang dibeli di toko TECH. ?
        </div>
        <div className="chat-footer">Delivered</div>
      </div>
      <div className="chat chat-end">
        <div className="avatar chat-image">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={CS} />
          </div>
        </div>
        <div className="chat-header flex items-center gap-4">
          <p>Linda</p>
          <time className="text-xs">12:46</time>
        </div>
        <div className="chat-bubble">
          Mantab mas buat render sat set sat set 👍 💯
        </div>
      </div>
      <div className="chat chat-start">
        <div className="avatar chat-image">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={Gue} />
          </div>
        </div>
        <div className="chat-header flex items-center gap-4">
          <p>Agus Alfandi</p>
          <time className="text-xs">12:47</time>
        </div>
        <div className="chat-bubble">Mantab... 👍</div>
        <div className="chat-footer">Delivered</div>
      </div>

      <div className="overflow-hidden">
        <p className="animate-[marquee_30s_linear_infinite] overflow-hidden whitespace-nowrap text-2xl text-green-500">
          Anda puas kami senang
        </p>
      </div>
    </div>
  );
};

export default Testimoni;
