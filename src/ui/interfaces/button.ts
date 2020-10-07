import ASTNode from '@/src/core/interfaces/ASTNode'

interface Button {
	apply(ast: ASTNode): ASTNode
}

export default Button
