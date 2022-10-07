class BaseService {
	constructor(model) {
		this.model = model
	}

	async list(where) {
		return await this.model?.find(where || {})
	}

	async create(data) {
		return await this.model?.create(data)
	}

	async update(id, data) {
		return await this.model?.findByIdAndUpdate(id, data)
	}

	async delete(id) {
		return await this.model?.findByIdAndDelete(id)
	}
}

module.exports = BaseService
