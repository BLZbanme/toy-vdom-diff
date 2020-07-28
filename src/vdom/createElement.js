import {
    vNode
} from "./vnode"

export default function createElement(type, props = {}, ...children) {
    // 获取属性的key 然后删掉
    let key;
    if (props.key) {
        key = props.key;
        delete props.key;
    }
    // 将不是虚拟节点的子节点变成虚拟节点
    children = children.map(child => {
        if (typeof child === "string") {
            return vNode(undefined, undefined, undefined, undefined, child);
        }
        else {
            return child;
        }
    })

    return vNode(type, props, key, children)
}