type ASTNodeAttribute = {
	key: string
	value: string
}

type ASTNode = {
	type: string
	children?: ASTNode[]
	value?: string
	attributes?: ASTNodeAttribute[]
}

export default ASTNode
