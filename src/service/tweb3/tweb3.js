import { GlitchWeb3 } from '@glitchdefi/web3'
// export default window.tweb3 = new GlitchWeb3('http://localhost:3001/api');
// export default window.tweb3 = new GlitchWeb3('ws://localhost:26657/websocket')
export default window.tweb3 = new GlitchWeb3(process.env.REACT_APP_RPC)
