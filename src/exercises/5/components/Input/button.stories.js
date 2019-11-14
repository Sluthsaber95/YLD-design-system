import React from "react";
import { Input } from "./";
import "../../theme/theme.css";

export default {
  title: "Input"
};

export const primary = () => (
  <>
    <Input>Input Label</Input>
    <br />
    <br />
    <Input disabled>Input Label</Input>
  </>
);

// export const secondary = () => (
//   <>
//     <Button variant="secondary">Button Label</Button>
//     <br />
//     <br />
//     <Button variant="secondary" disabled>
//       Button Label
//     </Button>
//   </>
// );

// export const info = () => (
//   <>
//     <Button variant="info">Button Label</Button>
//     <br />
//     <br />
//     <Button variant="info" disabled>
//       Button Label
//     </Button>
//   </>
// );

// export const accent = () => (
//   <>
//     <Button variant="accent">Button Label</Button>
//     <br />
//     <br />
//     <Button variant="accent" disabled>
//       Button Label
//     </Button>
//   </>
// );

// export const success = () => (
//   <>
//     <Button variant="success">Button Label</Button>
//     <br />
//     <br />
//     <Button variant="success" disabled>
//       Button Label
//     </Button>
//   </>
// );

// export const variants = () => (
//   <>
//     <div>{primary()}</div>
//     <br />
//     <div>{secondary()}</div>
//     <br />
//     <div>{info()}</div>
//     <br />
//     <div>{accent()}</div>
//     <br />
//     <div>{success()}</div>
//     <br />
//   </>
// );

// export const size = () => (
//   <>
//     <Button size="large">Button Label</Button>
//     <br />
//     <br />
//     <Button size="medium">Button Label</Button>
//     <br />
//     <br />
//     <Button size="small">Button Label</Button>
//     <br />
//     <br />
//     <Button size="xsmall">Button Label</Button>
//   </>
// );
