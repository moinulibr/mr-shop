@extends('layouts.dashboard')
@section('title', 'Product Categories')
@section('content')
<!-- Content Header (Page header) -->
<div class="content-header">
  <div class="container-fluid">
    <div class="row mb-2">
      <div class="col-sm-6">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="{{route('admin')}}">Home</a></li>
          <li class="breadcrumb-item active">Product Categories</li>
        </ol>
      </div><!-- /.col -->
    </div><!-- /.row -->
  </div><!-- /.container-fluid -->
</div>
<!-- /.content-header -->
<!-- Main content -->
<div class="content">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Product Categories Table</h3>
            <div class="card-tools">
              @can('product-category')
              <a class="btn btn-success" href="#" data-url="{{route('admin.product.productCategory.create')}}" id="add_product_category"> Create New Category</a>
              @endcan
            </div>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered table-hover" id="product_category_table">
                <thead>
                  <tr>
                    <th style="width: 25px;">No</th>
                    <th>Name</th>
                    <th style="width: 60px">Image</th>
                    <th>Description</th>
                    <th>Sub Categories</th>
                    <th style="width: 50px;">Action</th>
                  </tr>
                </thead>
                <tbody>
                @foreach($categories as $category)
                <tr>
                    <td>{{ $loop->index + 1}}</td>
                    <td>{{ $category->name }}</td>
                    <td>@if($category->image) <img src="{{asset($category->image)}}" height="50" width="50" alt="{{ $category->name }}">  @endif </td>
                    <td>{{$category->description }}</td>
                    <td>{{$category->children->implode('name', ', ') }}</td>
                    <td>
                    	<ul class="nav tbl_btns">
                    		<li><a href ="#" data-url="{{route('admin.product.productCategory.edit', $category->slug)}}" class="category_edit"><i class="fa fa-pencil-alt" aria-hidden="true"></i></a></li>
                    		<li><a href="#" data-url="{{route('admin.product.productCategory.destroy', $category->slug)}}" class="sweet_confirm"><i class="fa fa-trash" aria-hidden="true"></i></a></li>
                    	</ul>
                    </td>
                </tr>
                @endforeach
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div><!-- /.container-fluid -->
</div>
<!-- /.content -->
<!-- Modal Product Image -->
<div class="modal fade" id="productCategoryModal" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
	<div class="modal-dialog modal-lg" role="document">
		<div class="modal-content">
		</div>
	</div>
</div>
@endsection
@push('scripts')
<script type="text/javascript">
$(document).ready(function() {
	var $modal = $('#productCategoryModal');

  $('#product_category_table').delegate('.sweet_confirm', 'click', function(e){
    e.preventDefault();
    let url = $(this).data('url');
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        $.ajax({
          type: "DELETE",
          url: url,
          success: function(response) {
            if (response.success) { // if true (1)
              Swal.fire('Deleted!', response.message,'success');
              setTimeout(function() { // wait for 0.5 secs(2)
                location.reload(); // then reload the page.(3)
              }, 500);
            } else {
              Swal.fire('Error!', response.message,'error');
            }
          }
        });
      }
    })
  });

  $(document).on('click', '#add_product_category', function(e){
    e.preventDefault();
    let url = $(this).data('url');
    $.ajax({
      type: "GET",
      url,
      success: function(response) {
        if (response.success) {
          $modal.find('.modal-content').html(response.html);
          $modal.modal('show');
          $modal.find('.sub_category.select-2').select2({
            theme: 'bootstrap4',
            placeholder: "Select Sub Category",
            allowClear: true
          });
        } else {
          Swal.fire('Error!', 'Something went wrong!','error');
        }
      }
    });    
  })

  $(document).on('click', '#product_category_table .category_edit', function(e){
    e.preventDefault();
    let url = $(this).data('url');
    $.ajax({
      type: "GET",
      url,
      success: function(response) {
        if (response.success) {
          $modal.find('.modal-content').html(response.html);
          $modal.modal('show');
          $modal.find('.sub_category.select-2').select2({
            theme: 'bootstrap4',
            placeholder: "Select Sub Category",
            allowClear: true
          });
        } else {
          Swal.fire('Error!', 'Something went wrong!','error');
        }
      }
    });    
  }) 

  $(document).on('change', '#category_image', function(e){
    e.preventDefault();
    let _this = this;
    if (this.files && this.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        $('#category_image_preview img').attr('src', e.target.result).show();
      }
      reader.readAsDataURL(_this.files[0]);
    }
  })

  $('#product_category_table').dataTable();

});
</script>
@endpush