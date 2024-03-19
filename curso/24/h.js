function f({ p }, args) {
    if (p) {
        console.log("ff")
    }
    const s = args.reduce((prev, curr) => curr + prev)
    console.log(s)
}

f({ p: false }, [1, 234, 23, 43,])
console.log("-----------------")
f({ p: true }, [1, 234, 23, 43,])

