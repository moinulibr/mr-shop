<label class="control-label" for="{{$setting->key}}">{{Str::title(str_replace('_', ' ', $setting->key))}}</label>
<textarea class="form-control" type="text" placeholder="Enter {{Str::title(str_replace('_', ' ', $setting->key))}}" id="{{$setting->key}}" name="{{$setting->key}}">{{ config('settings.'.$setting->key) }}</textarea>