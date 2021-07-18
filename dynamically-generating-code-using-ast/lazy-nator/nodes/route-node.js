module.exports = (path, method) => ({
    "type": "ExpressionStatement",
    "expression": {
        "type": "CallExpression",
        "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
                "type": "Identifier",
                "name": "router"
            },
            "property": {
                "type": "Identifier",
                "name": method
            }
        },
        "arguments": [
            {
                "type": "Literal",
                "value": path,
                "raw": `'${path}'`
            },
            {
                "type": "FunctionExpression",
                "id": null,
                "params": [
                    {
                        "type": "Identifier",
                        "name": "req"
                    },
                    {
                        "type": "Identifier",
                        "name": "res"
                    }
                ],
                "body": {
                    "type": "BlockStatement",
                    "body": [
                        {
                            "type": "ExpressionStatement",
                            "expression": {
                                "type": "CallExpression",
                                "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                        "type": "Identifier",
                                        "name": "res"
                                    },
                                    "property": {
                                        "type": "Identifier",
                                        "name": "send"
                                    }
                                },
                                "arguments": [
                                    {
                                        "type": "Literal",
                                        "value": `Hello from path ${path}`,
                                        "raw": `'Hello from path ${path}'`
                                    }
                                ]
                            }
                        }
                    ]
                },
                "generator": false,
                "expression": false,
                "async": false
            }
        ]
    }
});