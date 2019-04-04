@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">A Simple Form</div>

                <div class="card-body">
                    <form method="POST" action="/submit">
                        @csrf
                        <div class="form-group">
                            <label for="exampleInput">Some input field:</label>
                            <input type="text" class="form-control" id="exampleInput" placeholder="Please enter something">
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
