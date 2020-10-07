import Button from '@/src/ui/interfaces/button'
import ASTNode from '@/src/core/interfaces/ASTNode'

class ItalicButton implements Button {
	apply(ast: ASTNode): ASTNode {
		return {};
	}
}

export default ItalicButton
