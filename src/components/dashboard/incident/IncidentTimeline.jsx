import { AlertCircle, CheckCircle, Mail, XCircle } from "lucide-react";

const iconConfig = {
  alert: {
    bg: "bg-red-500/20",
    text: "text-red-400",
    icon: AlertCircle
  },

  defense: {
    bg: "bg-blue-500/20",
    text: "text-blue-400",
    icon: CheckCircle
  },

  notification: {
    bg: "bg-green-500/20",
    text: "text-green-400",
    icon: Mail
  },

  escalation: {
    bg: "bg-yellow-500/20",
    text: "text-yellow-400",
    icon: XCircle
  }
};

export default function IncidentTimeline({ timeline }) {
  return (
    <div className="bg-bgCard rounded-2xl p-6 mt-6 w-full">

      <h2 className="text-white text-xl font-semibold mb-6">
        Incident Timeline
      </h2>

      <div className="relative">

        <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-[#1f2937]" />

        {timeline.map((item, index) => {
          const style = iconConfig[item.type];
          const Icon = style.icon;

          return (
            <div key={index} className="flex items-start gap-6 mb-8">

              <div className={`relative z-10 w-9 h-9 flex items-center justify-center rounded-full ${style.bg}`}>
                <Icon className={`${style.text} w-4 h-4`} />
              </div>

              <div>

                <p className="text-gray-400 text-sm">
                  {item.time}
                </p>

                <p className="text-[#C7D2E0] mt-1">
                  {item.event}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}