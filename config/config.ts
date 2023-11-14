export const production = !(
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
);

export const treeDimensions = {
  width: 720,
  height: 1280,
};

export const lightAdjustment = {
  x: {
    scalar: 1,
    offset: 1,
  },
  y: {
    scalar: 1,
    offset: 1,
  },
};

export const videoStreamUrl =
  "https://stream.interactivechristmastree.com/proxied/";

export const hiddenBulbs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
export const placementCooldown = 3_000;