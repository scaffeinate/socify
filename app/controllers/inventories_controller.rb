class InventoriesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_inventory, only: [:show, :edit, :update, :destroy]
  before_action :check_ownership, only: [:edit, :update]

  respond_to :js

  # GET /inventories
  def index
    @inventories = Inventory.all
  end

  # GET /inventories/1
  def show

  end

  # GET /inventories/new
  def new
    @inventory = Inventory.new
  end

  # GET /inventories/1/edit
  def edit
  end

  # POST /inventories
  def create
    @inventory = Inventory.new(inventory_params)

    if @inventory.save
      redirect_to @inventory, notice: 'Inventory was successfully created.'
    else
      render :new
    end
  end

  # PATCH/PUT /inventories/1
  def update
    if @inventory.update(inventory_params)
      redirect_to @inventory, notice: 'Inventory was successfully updated.'
    else
      render :edit
    end
  end

  # DELETE /inventories/1
  def destroy
    @inventory.destroy
    redirect_to inventories_url, notice: 'Inventory was successfully destroyed.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_inventory
      @inventory = Inventory.find_by(params[:id])

    end
  def set_user
    @user = current_user
  end

    # Only allow a trusted parameter "white list" through.
    def inventory_params
      params.require(:inventory).permit(:product_id, :item, :condition, :price, :owner_id, :borrower_id, :status, :borrowed_date, :return_date)
    end
end
