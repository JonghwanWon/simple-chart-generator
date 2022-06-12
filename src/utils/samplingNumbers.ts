type Config = {
  count: number;
  min: number;
  max: number;
};

const randomInt = (min = 0, max = 100) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const samplingNumbers = ({ count = 5, min, max }: Partial<Config>) => {
  return Array.from({ length: count }, () => randomInt(min, max));
};

export { samplingNumbers };
