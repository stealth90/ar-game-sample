import { useEffect, useState } from 'react';

export const useCamera = (gameDuration: number) => {
  const [isChecking, setIsChecking] = useState(true);
  const [stream, setStream] = useState<MediaStream>();
  const [status, setStatus] = useState<'denied' | 'notfound' | 'agree'>();

  useEffect(() => {
    if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
      navigator.mediaDevices
        .getUserMedia({
          video: { facingMode: 'user' },
        })
        .then((stream) => {
          if (stream.active) {
            setStream(stream);
            setIsChecking(false);
            setStatus('agree');
          }
          setTimeout(() => {
            const tracks = stream.getTracks();
            tracks[0].stop();
          }, gameDuration * 1000);
        })
        .catch((e) => {
          console.error(`Error ${e}`);
          setStatus('denied');
        })
        .finally(() => {
          setIsChecking(false);
        });
    } else {
      setIsChecking(false);
      setStatus('notfound');
    }
  }, [gameDuration]);

  return { isChecking, status, stream };
};
