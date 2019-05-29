
const envCB = () => {
    let env = process.env.NODE_ENV;
    console.log('当前系统环境');
    return env ? 'http://localhost:3000' : 'http://119.29.177.85:3000'
}

module.exports = {
    env : envCB
}